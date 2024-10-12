import axios from 'axios';

const patchPatientData = async ( ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;

    const result = await sessionStorage.getItem('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.patch(`${API_BASE_URL}/feed`, {
            id: data.id,
            state: data.state,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.status == 204) {
            return true;
        }
    } catch (error) {
        if (error.response) {
            if(error.response.status === 401) {
                alert('유저를 찾을 수 없습니다.');
            } else {
              alert('수정 오류입니다.');
            }
        } else {
            alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default patchPatientData;