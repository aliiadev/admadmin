import {
    type UseControllerProps,
    useController
} from "react-hook-form";
import {
    PasswordInput as $PasswordInput,
    type PasswordInputProps as $PasswordInputProps,
} from "@mantine/core";
import { memo } from "react";

export type PasswordInputProps = $PasswordInputProps & {
    controller: UseControllerProps
}

export const PasswordInput = memo(function PasswordInput({
    onChange,
    ...props
}: PasswordInputProps) {

    const { field: { value, onChange: fieldOnChange, ...field }, fieldState } = useController(props.controller);

    const localOnchange = (e) => {
        fieldOnChange(e.target.value);
        onChange?.(e);
    }

    return (
        <$PasswordInput
            value={value}
            onChange={localOnchange}
            error={fieldState.error?.message}
            withAsterisk={props.controller.rules?.required ? true : false}
            {...field}
            {...props}
        />
    );
})
