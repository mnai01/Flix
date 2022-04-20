import { useQuery } from '@apollo/client';
import { Center, Spinner } from '@chakra-ui/react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { ValidateRegisterToken, ValidateRegisterTokenVariables } from '../apollo/generated/ValidateRegisterToken';
import { VALIDATE_REGISTER_TOKEN } from '../apollo/queries';
import RegisterForm from '../components/Form/RegisterForm';

const RegisterPage = () => {
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();

    const { data, loading } = useQuery<ValidateRegisterToken, ValidateRegisterTokenVariables>(VALIDATE_REGISTER_TOKEN, {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        variables: { token: search.get('token')! },
        onError: () => {
            navigate('/', { replace: true });
        },
    });

    return loading ? (
        <Center h={'100vh'}>
            <Spinner size="xl" />
        </Center>
    ) : data?.ValidateRegisterToken !== 'false' ? (
        <RegisterForm />
    ) : (
        <Navigate to="/" />
    );
};

export default RegisterPage;
