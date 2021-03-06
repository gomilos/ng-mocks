import { InjectionToken } from '@angular/core';

import coreConfig from './core.config';
import { AnyType } from './core.types';

// istanbul ignore next
const getGlobal = (): any => window || global;

const globalMap = (key: string) => () => {
  if (!ngMocksUniverse.global.has(key)) {
    ngMocksUniverse.global.set(key, new Map());
  }

  return ngMocksUniverse.global.get(key);
};

interface NgMocksUniverse {
  builtDeclarations: Map<any, any>;
  builtProviders: Map<any, any>;
  cacheDeclarations: Map<any, any>;
  cacheProviders: Map<any, any>;
  config: Map<any, any>;
  configInstance: Map<any, any>;
  flags: Set<string>;
  getBuildDeclaration: (def: any) => any | undefined;
  getDefaults: () => Map<any, undefined | ['mock' | 'keep' | 'replace' | 'exclude', any?]>;
  getLocalMocks: () => Array<[any, any]>;
  getOverrides: () => Map<any, any>;
  getResolution: (def: any) => undefined | 'mock' | 'keep' | 'replace' | 'exclude';
  global: Map<any, any>;
  hasBuildDeclaration: (def: any) => boolean;
  isExcludedDef: (def: any) => boolean;
  isProvidedDef: (def: any) => boolean;
  touches: Set<AnyType<any> | InjectionToken<any> | string>;
}

getGlobal().ngMocksUniverse = getGlobal().ngMocksUniverse || {};
const ngMocksUniverse: NgMocksUniverse = getGlobal().ngMocksUniverse;

ngMocksUniverse.builtDeclarations = new Map();
ngMocksUniverse.builtProviders = new Map();
ngMocksUniverse.cacheDeclarations = new Map();
ngMocksUniverse.cacheProviders = new Map();
ngMocksUniverse.config = new Map();
ngMocksUniverse.configInstance = new Map();
ngMocksUniverse.flags = new Set(coreConfig.flags);
ngMocksUniverse.global = new Map();
ngMocksUniverse.touches = new Set();

ngMocksUniverse.getLocalMocks = () => {
  if (!ngMocksUniverse.global.has('local-mocks')) {
    ngMocksUniverse.global.set('local-mocks', []);
  }

  return ngMocksUniverse.global.get('local-mocks');
};

ngMocksUniverse.getOverrides = globalMap('overrides');
ngMocksUniverse.getDefaults = globalMap('defaults');

ngMocksUniverse.getResolution = (def: any): undefined | 'mock' | 'keep' | 'replace' | 'exclude' => {
  const set = ngMocksUniverse.config.get('ngMocksDepsResolution');
  if (set?.has(def)) {
    return set.get(def);
  }

  if (!ngMocksUniverse.getDefaults().has(def)) {
    return undefined;
  }

  const [value] = ngMocksUniverse.getDefaults().get(def);

  return value;
};

ngMocksUniverse.getBuildDeclaration = (def: any): undefined | null | any => {
  if (ngMocksUniverse.builtDeclarations.has(def)) {
    return ngMocksUniverse.builtDeclarations.get(def);
  }
  if (!ngMocksUniverse.getDefaults().has(def)) {
    return;
  }

  const [mode, replacement] = ngMocksUniverse.getDefaults().get(def);

  if (mode === 'exclude') {
    return null;
  }
  if (mode === 'keep') {
    return def;
  }
  if (mode === 'replace') {
    return replacement;
  }
};

ngMocksUniverse.hasBuildDeclaration = (def: any): boolean => {
  if (ngMocksUniverse.builtDeclarations.has(def)) {
    return true;
  }
  if (!ngMocksUniverse.getDefaults().has(def)) {
    return false;
  }

  const [mode] = ngMocksUniverse.getDefaults().get(def);

  return mode !== 'mock';
};

const hasBuildDeclaration = (def: any): boolean => ngMocksUniverse.hasBuildDeclaration(def);
const getBuildDeclaration = (def: any): any => ngMocksUniverse.getBuildDeclaration(def);

ngMocksUniverse.isExcludedDef = (def: any): boolean => hasBuildDeclaration(def) && getBuildDeclaration(def) === null;

ngMocksUniverse.isProvidedDef = (def: any): boolean => hasBuildDeclaration(def) && getBuildDeclaration(def) !== null;

export default ((): NgMocksUniverse => ngMocksUniverse)();
