// tslint:disable max-file-line-count

import { EventEmitter, InjectionToken, Injector, Provider } from '@angular/core';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';

import { AnyType, Type } from '../common/core.types';
import { NgModuleWithProviders } from '../common/func.is-ng-module-def-with-providers';
import { MockedDebugElement, MockedDebugNode } from '../mock-render/types';
import { CustomMockFunction, MockedFunction } from '../mock-service/types';

import mockHelperAutoSpy from './mock-helper.auto-spy';
import mockHelperDefaultMock from './mock-helper.default-mock';
import mockHelperFaster from './mock-helper.faster';
import mockHelperFind from './mock-helper.find';
import mockHelperFindAll from './mock-helper.find-all';
import mockHelperFindInstance from './mock-helper.find-instance';
import mockHelperFindInstances from './mock-helper.find-instances';
import mockHelperFlushTestBed from './mock-helper.flush-test-bed';
import mockHelperGet from './mock-helper.get';
import mockHelperGlobalExclude from './mock-helper.global-exclude';
import mockHelperGlobalKeep from './mock-helper.global-keep';
import mockHelperGlobalMock from './mock-helper.global-mock';
import mockHelperGlobalReplace from './mock-helper.global-replace';
import mockHelperGlobalWipe from './mock-helper.global-wipe';
import mockHelperGuts from './mock-helper.guts';
import mockHelperInput from './mock-helper.input';
import mockHelperOutput from './mock-helper.output';
import mockHelperReset from './mock-helper.reset';
import mockHelperStub from './mock-helper.stub';
import mockHelperStubMember from './mock-helper.stub-member';
import mockHelperThrowOnConsole from './mock-helper.throw-on-console';

/**
 * @see https://ng-mocks.sudo.eu/api/ngMocks
 */
export const ngMocks: {
  /**
   * @see https://ng-mocks.sudo.eu/extra/auto-spy
   */
  autoSpy(type: 'jasmine' | 'jest' | 'default' | 'reset'): void;

  /**
   * @see https://ng-mocks.sudo.eu/extra/auto-spy
   */
  autoSpy(type: CustomMockFunction): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/defaultMock
   */
  defaultMock<T>(
    token: InjectionToken<T>,
    handler?: (value: undefined | T, injector: Injector) => undefined | Partial<T>,
  ): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/defaultMock
   */
  defaultMock<T = any>(
    token: string,
    handler?: (value: undefined | T, injector: Injector) => undefined | Partial<T>,
  ): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/defaultMock
   */
  defaultMock<T>(def: AnyType<T>, handler?: (value: T, injector: Injector) => void | Partial<T>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/faster
   */
  faster(): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T>(component: Type<T>): MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T>(debugElement: MockedDebugElement | ComponentFixture<any>, component: Type<T>): MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T, D>(component: Type<T>, notFoundValue: D): D | MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T, D>(
    debugElement: MockedDebugElement | ComponentFixture<any>,
    component: Type<T>,
    notFoundValue: D,
  ): D | MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T = any>(cssSelector: string): MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T = any>(debugElement: MockedDebugElement | ComponentFixture<any>, cssSelector: string): MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T = any, D = undefined>(cssSelector: string, notFoundValue: D): D | MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/find
   */
  find<T = any, D = undefined>(
    debugElement: MockedDebugElement | ComponentFixture<any>,
    cssSelector: string,
    notFoundValue: D,
  ): D | MockedDebugElement<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findAll
   */
  findAll<T>(component: Type<T>): Array<MockedDebugElement<T>>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findAll
   */
  findAll<T>(
    debugElement: MockedDebugElement | ComponentFixture<any>,
    component: Type<T>,
  ): Array<MockedDebugElement<T>>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findAll
   */
  findAll<T = any>(cssSelector: string): Array<MockedDebugElement<T>>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findAll
   */
  findAll<T = any>(
    debugElement: MockedDebugElement | ComponentFixture<any>,
    cssSelector: string,
  ): Array<MockedDebugElement<T>>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstance
   */
  findInstance<T>(instanceClass: Type<T>): T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstance
   */
  findInstance<T>(debugNode: MockedDebugNode | ComponentFixture<any>, instanceClass: Type<T>): T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstance
   */
  findInstance<T, D>(instanceClass: Type<T>, notFoundValue: D): D | T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstance
   */
  findInstance<T, D>(
    debugNode: MockedDebugNode | ComponentFixture<any>,
    instanceClass: Type<T>,
    notFoundValue: D,
  ): D | T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstances
   */
  findInstances<T>(instanceClass: Type<T>): T[];

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/findInstances
   */
  findInstances<T>(debugNode: MockedDebugNode | ComponentFixture<any>, instanceClass: Type<T>): T[];

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/flushTestBed
   */
  flushTestBed(): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/get
   */
  get<T>(debugNode: MockedDebugNode, directive: Type<T>): T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/get
   */
  get<T, D>(debugNode: MockedDebugNode, directive: Type<T>, notFoundValue: D): D | T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/globalExclude
   */
  globalExclude(source: AnyType<any> | InjectionToken<any>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/globalKeep
   */
  globalKeep(source: AnyType<any> | InjectionToken<any>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/globalMock
   */
  globalMock(source: AnyType<any> | InjectionToken<any>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/globalReplace
   */
  globalReplace(source: AnyType<any>, destination: AnyType<any>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/globalWipe
   */
  globalWipe(source: AnyType<any> | InjectionToken<any>): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/guts
   */
  guts(
    keep:
      | AnyType<any>
      | InjectionToken<any>
      | Provider
      | Array<AnyType<any> | InjectionToken<any> | Provider>
      | null
      | undefined,
    mock?:
      | AnyType<any>
      | InjectionToken<any>
      | NgModuleWithProviders
      | Provider
      | Array<AnyType<any> | InjectionToken<any> | NgModuleWithProviders | Provider>
      | null
      | undefined,
    exclude?: AnyType<any> | InjectionToken<any> | Array<AnyType<any> | InjectionToken<any>> | null | undefined,
  ): TestModuleMetadata;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/input
   */
  input<T = any>(debugNode: MockedDebugNode, input: string): T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/input
   */
  input<T = any, D = undefined>(debugNode: MockedDebugNode, input: string, notFoundValue: D): D | T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/output
   */
  output<T = any>(debugNode: MockedDebugNode, output: string): EventEmitter<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/output
   */
  output<T = any, D = undefined>(debugNode: MockedDebugNode, output: string, notFoundValue: D): D | EventEmitter<T>;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/reset
   */
  reset(): void;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/stub
   */
  stub<T = MockedFunction, I = any>(instance: I, name: keyof I, style?: 'get' | 'set'): T;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/stub
   */
  stub<I extends object>(instance: I, overrides: Partial<I>): I;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/stubMember
   */
  stubMember<T extends object, K extends keyof T, S extends () => T[K]>(
    instance: T,
    name: K,
    stub: S,
    encapsulation: 'get',
  ): S;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/stubMember
   */
  stubMember<T extends object, K extends keyof T, S extends (value: T[K]) => void>(
    instance: T,
    name: K,
    stub: S,
    encapsulation: 'set',
  ): S;

  /**
   * @see https://ng-mocks.sudo.eu/api/ngMocks/stubMember
   */
  stubMember<T extends object, K extends keyof T, S extends T[K]>(instance: T, name: K, stub: S): S;

  /**
   * Thanks Ivy, it does not throw an error and we have to use injector.
   *
   * @see https://ng-mocks.sudo.eu/api/ngMocks/throwOnConsole
   */
  throwOnConsole(): void;
} = {
  autoSpy: mockHelperAutoSpy,
  defaultMock: mockHelperDefaultMock,
  faster: mockHelperFaster,
  find: mockHelperFind,
  findAll: mockHelperFindAll,
  findInstance: mockHelperFindInstance,
  findInstances: mockHelperFindInstances,
  flushTestBed: mockHelperFlushTestBed,
  get: mockHelperGet,
  globalExclude: mockHelperGlobalExclude,
  globalKeep: mockHelperGlobalKeep,
  globalMock: mockHelperGlobalMock,
  globalReplace: mockHelperGlobalReplace,
  globalWipe: mockHelperGlobalWipe,
  guts: mockHelperGuts,
  input: mockHelperInput,
  output: mockHelperOutput,
  reset: mockHelperReset,
  stub: mockHelperStub,
  stubMember: mockHelperStubMember,
  throwOnConsole: mockHelperThrowOnConsole,
};
