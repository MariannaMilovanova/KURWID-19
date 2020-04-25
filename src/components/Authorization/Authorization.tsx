import React, {PureComponent} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {Icon, Image} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import './Authorization.scss';

/*через гугл, может быть просто в хедере
 * возможность посмотреть последнии оцененые места
 * */
const block = createBlock('Authorization');

export interface AuthorizationProps {
  userLogin?: (response: any) => {};
  userLogout?: () => {};
  user?: any;
}

const userBlock = createBlock('UserData');

const UserData = ({user}) => (
  <div className={b(userBlock)}>
    {user ? (
      <div>
        <Image src={user.imageUrl} avatar size="tiny" alt={user.name} title={user.name} />
      </div>
    ) : (
      <Icon name="spy" size="huge" color="blue" />
    )}
  </div>
);

export default class Authorization extends PureComponent<AuthorizationProps> {
  static defaultProps = {
    userLogin: () => {},
    userLogout: () => {},
  };
  state = {
    user: null,
  };
  componentDidMount() {
    this.getUserFromStorage();
  }
  getUserFromStorage = (id?: string) => {
    const active = id || localStorage.getItem('active');
    console.warn('active', active);
    if (active) {
      const user = JSON.parse(localStorage.getItem(active) as string);
      this.setState({user});
    }
  };
  responseSuccess = (response) => {
    if (!localStorage.getItem(`${response.googleId}`)) {
      const userData = {...response.profileObj};
      localStorage.setItem(`${response.googleId}`, JSON.stringify(userData));
      localStorage.setItem('active', response.googleId);

      return this.setState({user: response.profileObj});
    }
    this.getUserFromStorage(response.googleId);
    localStorage.setItem('active', response.googleId);
  };
  responseError = (response) => {
    console.log(response);
  };
  logout = () => {
    localStorage.removeItem('active');
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    this.setState({user: null});
    localStorage.setItem('active', '');
  };

  render() {
    const {user} = this.state;

    return (
      <div className={b(block)}>
        <UserData user={this.state.user} />
        {user ? (
          <GoogleLogout
            buttonText="Logout"
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            className={this.props.user ? b(block, 'logout-btn') : b(block, 'none')}
            onLogoutSuccess={this.logout}
          />
        ) : (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            buttonText="Login"
            className={this.props.user ? b(block, 'none') : b(block, 'Login-btn')}
            fetchBasicProfile={true}
            onSuccess={this.responseSuccess}
            onFailure={this.responseError}
          />
        )}
      </div>
    );
  }
}
