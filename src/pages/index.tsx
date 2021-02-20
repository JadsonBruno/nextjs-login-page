/**
 * IMPORTS
 */
import {notification} from 'antd';
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import * as userAPI from '../aggregates/user/api';
import Button from '../components/Button';
import Input from '../components/Input';
import * as Styles from '../styles/pages/Home';
import validateEmail from '../validators/email';
import validatePassword from '../validators/password';


/**
 * TYPES
 */
import {ChangeEvent} from 'react';
import {FormEvent} from 'react';
import {INPUT_TYPE} from '../components/Input/index.d';
import {IAppState} from '../aggregates/index.d';


/**
 * CODE
 */
function Home()
{
  // define getters and setters
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(undefined)
  const [password, setPassword] = useState<string>('');

  // get isAuthorized flag from state
  const {isAuthorized} = useSelector((state: IAppState) => state.user);

  const {isAuthorizing} = useSelector((state: IAppState) => state.user);

  // get login erros from state
  const {loginError} = useSelector((state: IAppState) => state.user);

  // get router instance
  const router = useRouter();

  /**
   * I handle the password field blur.
   *
   * :returns: promise with nothing
   */
  async function handlePasswordBlur (e): Promise<void>
  {
    // validate password value
    try
    {
      await validatePassword.validate({
        password: e.target.value
      });

      // valid password: set valid password flag
      setIsPasswordValid(true);
    }

    // invalid password: set password flag as invalid
    catch
    {
      setIsPasswordValid(false);
    }
  }


  /**
   * I handle the email field blur.
   *
   * :returns: promise with nothing
   */
  async function handleEmailBlur (e): Promise<void>
  {
    // validate email value
    try
    {
      await validateEmail.validate({
        email: e.target.value
      });

      // valid email: set valid email flag
      setIsEmailValid(true);
    }

    // invalid email: set email flag as invalid
    catch
    {
      setIsEmailValid(false);
    }
  }


  /**
   * I handle the email value change.
   *
   * :returns: promise with nothing
   */
  function handleEmailChange (e: ChangeEvent<HTMLInputElement>): void
  {
    // set current value at local state
    setEmail(e.target.value);

    // reset email valid flag
    setIsEmailValid(undefined);
  }


  /**
   * I handle the password value change.
   *
   * :returns: promise with nothing
   */
  function handlePasswordChange (e: ChangeEvent<HTMLInputElement>): void
  {
    // set current value at local state
    setPassword(e.target.value);

    // reset password valid flag
    setIsPasswordValid(undefined);
  }


  /**
   * I handle the submit event.
   *
   * :returns: promise with nothing
   */
  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void>
  {
    // prevent reload page
    e.preventDefault();

    // call API
    await userAPI.login(email, password);
  }

  // listen to user login errors
  useEffect(() =>
  {
    // there is login error: show error message
    if (loginError !== null)
    {
      notification.error({
        message: 'Erro',
        description: 'Usuário ou senha inválidos',
        placement: 'bottomLeft'
      });
    }
  }, [loginError]);


  // listen to user authorized changes
  useEffect(() =>
  {
    // user authorized: go to welcome page
    if (isAuthorized === true)
    {
      router.push('/welcome')
    }
  }, [isAuthorized]);

  // return home page
  return (
      <Styles.Container>
          <Styles.ImageContainer />
          <Styles.ContentContainer>
            <Styles.Form
              onSubmit={handleSubmit}
            >
              <Styles.Title>
                Olá, seja bem-vindo!
              </Styles.Title>
              <Styles.Instructions>
                Para acessar a plataforma, 
                faça seu login.
              </Styles.Instructions>
              <Styles.InputContainer>
                <Styles.InputTitle>
                  E-MAIL
                </Styles.InputTitle>
                <Input
                  placeholder="user.name@mail.com"
                  type={INPUT_TYPE.EMAIL}
                  onChangeCallback={handleEmailChange}
                  isValid={isEmailValid}
                  onBlur={handleEmailBlur}
                />
                {isEmailValid === false &&
                  <Styles.ErrorMessage>
                    Digite um e-mail válido;
                  </Styles.ErrorMessage>
                }
              </Styles.InputContainer>
              <Styles.InputContainer>
                <Styles.InputTitle>
                  SENHA
                </Styles.InputTitle>
                <Input
                  placeholder="*******"
                  type={INPUT_TYPE.PASSWORD}
                  onChangeCallback={handlePasswordChange}
                  isValid={isPasswordValid}
                  onBlur={handlePasswordBlur}
                />
                {isPasswordValid === false &&
                  <Styles.ErrorMessage>
                    Digite uma senha válida;
                  </Styles.ErrorMessage>
                }
              </Styles.InputContainer>
                <Button
                  type="submit"
                  disabled={
                    isPasswordValid === false ||
                    isEmailValid === false
                  }
                  isLoading={isAuthorizing}
                />
                <Styles.ForgotContainer>
                  Esqueceu seu login ou senha?
                  Clique <a>aqui</a>
                </Styles.ForgotContainer>
            </Styles.Form>
          </Styles.ContentContainer>
      </Styles.Container>
  )
}


/**
 * EXPORTS
 */
export default Home;
