// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  export interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }
  
  export interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }
  
  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }
  
  export interface IQuery {
    __typename: "Query";
    dummy2: string | null;
    bye2: string | null;
    dummy: string | null;
    me: IUser | null;
    bye: string | null;
    hello: string;
  }
  
  export interface IHelloOnQueryArguments {
    name?: string | null;
  }
  
  export interface IUser {
    __typename: "User";
    id: string;
    email: string;
  }
  
  export interface IMutation {
    __typename: "Mutation";
    sendForgotPasswordEmail: boolean | null;
    forgotPasswordChange: Array<IError>;
    login: Array<IError>;
    logout: boolean | null;
    register: Array<IError>;
  }
  
  export interface ISendForgotPasswordEmailOnMutationArguments {
    email: string;
  }
  
  export interface IForgotPasswordChangeOnMutationArguments {
    newPassword: string;
    key: string;
  }
  
  export interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }
  
  export interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }
  
  export interface IError {
    __typename: "Error";
    path: string;
    message: string;
  }
}
  
// tslint:enable