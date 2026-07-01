import {useSelector} from 'react-redux'

const checkUser = ()=>{


    const {user, token , isAuthanicate} = useSelector( (state) => state.profile )

      console.log(user);
      console.log(token);
      console.log(isAuthanicate);
}


export default checkUser