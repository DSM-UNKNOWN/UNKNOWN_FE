import axios from 'axios';

const getPatientData = async ( ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    const result = await sessionStorage.getItem('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.get(`${API_BASE_URL}/feed`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 200) {
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
              alert('유저를 찾을 수 없습니다.');
            } else {
              alert('리스트 가져오기 오류입니다.');
            }
        } else {
            //console.error(error);
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default getPatientData;