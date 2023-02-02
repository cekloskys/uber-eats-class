/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RestaurauntCreateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type RestaurauntCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RestaurauntCreateFormOverridesProps = {
    RestaurauntCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    adminSub?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RestaurauntCreateFormProps = React.PropsWithChildren<{
    overrides?: RestaurauntCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RestaurauntCreateFormInputValues) => RestaurauntCreateFormInputValues;
    onSuccess?: (fields: RestaurauntCreateFormInputValues) => void;
    onError?: (fields: RestaurauntCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RestaurauntCreateFormInputValues) => RestaurauntCreateFormInputValues;
    onValidate?: RestaurauntCreateFormValidationValues;
} & React.CSSProperties>;
export default function RestaurauntCreateForm(props: RestaurauntCreateFormProps): React.ReactElement;
