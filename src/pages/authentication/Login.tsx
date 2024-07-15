import { PasswordInput } from "@components/form/PasswordInput";
import { TextInput } from "@components/form/TextInput";
import { Anchor, Button, Divider, Text, Title } from "@mantine/core";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { control, handleSubmit } = useForm();

    const { t } = useTranslation();

    const navigate = useNavigate();

    const onSubmit = async (values: FieldValues) => {
        console.log(`login data ${JSON.stringify(values)}`)
        localStorage.setItem('key', 'true');
        navigate('/')
    }

    return (
        <div className={'w-full flex justify-center h-screen items-center'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col max-w-[400px] w-full gap-4 p-4'}>
                <Title>{t('page.login.T0001')}</Title>
                <Text>{t('page.login.T0002')}</Text>
                <TextInput
                    controller={{
                        control,
                        name: 'username',
                        rules: {
                            required: t('FORM.M0001')
                        }
                    }}
                    size="md"
                    label={'Username'}
                    placeholder={'example'}
                />
                <PasswordInput
                    controller={{
                        control,
                        name: 'password',
                        rules: {
                            required: t('FORM.M0002')
                        }
                    }}
                    size="md"
                    label={'Password'}
                    placeholder={'Abc@123'}
                />
                <Button type="submit" size="md" radius={'xl'}>{t('page.login.T0003')}</Button>
                <Divider my="sm" />
                <Anchor ta={'center'} href="/authentication/register" size="sm">{t('page.login.T0004')}</Anchor>
            </form>
        </div>
    );
};

export default Login;