type Message = string | null;

const validate = async (value: any, action: string, option: string = ""):Promise<Message> => {
  const message :Message = await new Promise(async (resolve) => {
    let message :Message = null;
    switch (action) {
      case "required":
        if (value.trim().length === 0) {
          message = "Field required";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          message = "Email wrong";
        }
        break;
      case "number":
        let number = value.toString();
        number = number.replaceAll(",", "");
        number = parseFloat(number);
        if (!/^\d+(\.\d+)?$/.test(number)) {
          message = "Please entre number only";
        }
        break;
      case "secure":
        if (!/^(?=.*\d)(?=.*[a-z]).{8,32}$/.test(value)) {
          message = "Enter at least 8 characters";
        }
        break;
      case "min":
        const min = parseInt(option);
        if (value.trim().length < min) {
          message = `Enter at least ${min} characters`;
        }
        break;
      case "max":
        const max = parseInt(option);
        if (value.trim().length > max) {
          message = `Enter maximum ${max} characters`;
        }
        break;
      case "len":
        const len = parseInt(option);
        if (value.trim().length !== len) {
          message = `Enter ${len} characters`;
        }
        break;
      default:
        message = null;
    }

    resolve(message);
  });
  return message;
};
export default validate;
