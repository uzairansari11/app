/* this function is for getting token from cookies */

/* Note if token is not there it will return null else 
return parsed token
*/
import Cookies from "js-cookie";

export const getToken = () => {
	const authToken = Cookies.get("authToken") || null;
	if (authToken) {
		const parsedData = JSON.parse(authToken).token;
		return parsedData;
	} else {
		return null;
	}
};
