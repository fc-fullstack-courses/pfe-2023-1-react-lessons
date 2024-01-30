import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
  code: yup.number(),
});

    /*
      validate / validateSync - повертає пройшовшу валідацію річ або кидає помилку
      isValid / isValidSync - повертає булее значення чи пройшли дані валідацію

      методи без суффікса Sync є аснхроними і повертають проміси з аналогічними даними
    */

    // асинхронні перевіркі
    // loginSchema.isValid(validData).then(result => {console.log(result)});
    // loginSchema.isValid(invalidData).then(result => {console.log(result)});

    // loginSchema.validate(validData).then(result => {console.log(result)});
    // loginSchema
    //   .validate(validData)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.dir(err));

    // синхронні перевіркі
    // const isValidLoginData = loginSchema.isValidSync(validData);
    // const validatedObj = loginSchema.validateSync(validData);

    // try {
    //   loginSchema.validateSync(invalidData);
    // } catch (error) {
    //   console.dir(error);
    // }

    // console.log(res1);