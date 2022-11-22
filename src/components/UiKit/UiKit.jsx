import authOperations from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";

export default function UiKit() {
  const dispatch = useDispatch();
  const credentialRegister = {
    "email": "watermelon004@example.com",
    "password": "qwerty123",
    "username": "Emma"
  }
  const credentialLogIn = {
    "email": "watermelon004@example.com",
    "password": "qwerty123",
  }

  return (
    <div>
      <button
        type={'button'}
        onClick={() => dispatch(authOperations.register(credentialRegister))}
      >Register</button>
      <br/>
      <button
        type={'button'}
        onClick={() => dispatch(authOperations.logIn(credentialLogIn))}
      >Login</button>
      <br/>
      <button
        type={'button'}
        onClick={()=>dispatch(authOperations.logOut())}
      >LogOut</button>
      <br/>
      <button
        type={'button'}
        onClick={()=>dispatch(authOperations.refresh())}
      >Refresh</button>
    </div>
  );
}
