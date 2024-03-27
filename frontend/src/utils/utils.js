
export const validation = (type, value, cpassword = '') => {
    console.log(value, cpassword)
    switch (type) {
        case 0:
            if (value === '') {
                let res = { success: false, message: "Field Required" }
                return res;
            } else {
                let res = { success: true, message: "" }
                return res;
            }
        case 1:
            let mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (value === '') {
                let res = { success: false, message: "Field Required" }
                return res;
            } else if (!mail.test(value)) {
                let res = { success: false, message: "Enter valid email address" }
                return res;
            } else {
                let res = { success: true, message: "" }
                return res;
            }
        case 3:
            if (value === '') {
                let res = { success: false, message: "Field Required" }
                return res;
            } else if (value?.length < 6) {
                let res = { success: false, message: "Passwords must be at least 6 characters." }
                return res;
            } else {
                let res = { success: true, message: "" }
                return res;
            }
        case 4:
            if (value == '') {
                let res = { success: false, message: "Field Required" }
                return res;
            }
            if (value !== cpassword) {
                let res = { success: false, message: "Not match password" }
                return res;
            } else {
                let res = { success: true, message: "" }
                return res;
            }

        default:
            let res = { success: true, message: "" }
            return res;
    }
};