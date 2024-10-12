import axios from 'axios';

const postUserSignup = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    try {
        const response = await axios.post(`${API_BASE_URL}/user/signup`, {
            userid: data.userid,
            userpw: data.userpw,
            state: data.state,
            connect: data.connect,
        });
        
        if(response.status == 201) {
            alert('회원가입에 성공했습니다.');
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              alert('비밀번호가 일치하지 않습니다.');
            } else if (error.response.status === 404) {
              alert('페이지를 찾을 수 없습니다.');
            } else {
              alert('회원가입 오류입니다.');
            }
        } else {
            //console.log(error);
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default postUserSignup;