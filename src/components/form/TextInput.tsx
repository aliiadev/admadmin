import {
    type UseControllerProps,
    useController
} from "react-hook-form";
import {
    TextInput as $TextInput,
    type TextInputProps as $TextInputProps,
} from "@mantine/core";
import { memo } from "react";

export type TextInputProps = $TextInputProps & {
    controller: UseControllerProps
}

export const TextInput = memo(function TextInput({
    onChange,
    ...props
}: TextInputProps) {

    const { field: { value, onChange: fieldOnChange, ...field }, fieldState } = useController(props.controller);

    const localOnchange = (e) => {
        fieldOnChange(e.target.value);
        onChange?.(e);
    }

    return (
        <$TextInput
            value={value}
            onChange={localOnchange}
            error={fieldState.error?.message}
            withAsterisk={props.controller.rules?.required ? true : false}
            {...field}
            {...props}
        />
    );
})
