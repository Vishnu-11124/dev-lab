import { z } from "zod";

// const userSchema = z.object({
//   name: z.string(),
//   age: z.number(),
//   email: z.string().email(),
// })

// const userData = {
//   name: 'Harry',
//   age: 34,
//   email: 'harry45@gmail.com'
// }

// const validUser = userSchema.parse(userData)
// console.log("Data:", validUser)

// ------------------------------------------------------------------------

// const userSchema = z.object({
//   name: z.string(),
//   age: z.number().optional(),
//   email: z.string().email(),
//   place: z.string().default("unknown"),
// });

// const data = {
//   name: "rossy",
//   // age: 55,
//   email: "rossy@gmail.com",
//   // place: 'Kollam'
// };

// const validUser = userSchema.parse(data);
// console.log(validUser);

// ------------------------------------------------------------------------

// const userSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   job: z.string().default("NA"),
//   address: z.object({
//     place: z.string(),
//     pincode: z.string(),
//   }),
//   age: z.number().optional(),
// });

// const user1 = {
//   name: "Zoa",
//   email: "zoa@gmail.com",
//   // job: 'Designer',
//   address: {
//     place: "Goa",
//     pincode: "678456",
//   },
//   // age: 23
// };

// console.log("user1:", userSchema.parse(user1));

// ------------------------------------------------------------------------

const mernSchema = z.array(z.string())

const mernStack = ['reactjs', 'nodejs', 'express', 'mongodb']

console.log("MERN Stack:", mernSchema.parse(mernStack))

// ------------------------------------------------------------------------
