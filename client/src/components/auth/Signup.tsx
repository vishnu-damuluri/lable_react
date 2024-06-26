import { Link } from "react-router-dom";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, 'Enter your full name.').max(20, 'You exceeded the maximum character limit.'),
  email: z.string().email('Enter a valid email address.'),
  password1: z.string().min(8, 'It should contain ATLEAST 8 characters.').max(32, 'Password exceeded the maximum of 32 characters limit.').regex(/^(?=.*[A-Z])(?=.*[!@%^*,_]).*$/, { message: 'Password must have ATLEAST 1 uppercase and 1 special character.' }),
  password2: z.string(),
})
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match.',
    path: ['password2']
  });

type SignUpForm = z.infer<typeof formSchema>;

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpForm>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<SignUpForm> = async ({ name, email, password1, password2 }: SignUpForm) => {
    new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(name)
    console.log(email)
    console.log(password1)
    console.log(password2)
  }
  return (
    <div>

      <div className="flex h-screen">
        <div className="hidden lg:flex items-center justify-center flex-1 bg-yellow-400 text-black dark:text-white">
          <div className="max-w-md text-center">

          </div>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-900  lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full ">
            <div className="lg:text-left text-center">
              <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-gray-100">
                Diagnosis at your convinence
              </h2>
            </div>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 dark:text-gray-300 mt-8 text-center lg:text-left">Get your lable and join the health convinence </h1>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4" id="google">
                    <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                    <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                    <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                    <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
                  </svg> Sign Up with Google </button>
              </div>
              <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/hi/c/cf/Aadhaar_Logo.svg" alt="Aadhar Logo" className="h-4 flex justify-left" id="aadhaar" />
                  Sign Up with Aadhar
                </button>
              </div>

            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
              <p>or with email</p>
            </div>
            <form method="POST" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-left dark:text-gray-400 text-gray-700">Full Name</label>
                <input type="text" id="username" {...register('name')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-21focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Full name" />
                {errors.name && (<p className="text-red-600 flex justify-start">{`${errors.name.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Email</label>
                <input type="text" id="email" {...register('email')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="example@email.com" />
                {errors.email && (<p className="text-red-600 flex justify-start">{`${errors.email.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Password</label>
                <input type="password" id="password" {...register('password1')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Password" />
                {errors.password1 && (<p className="text-red-600 flex justify-start">{`${errors.password1.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Confirm Password</label>
                <input type="password" id="password2" {...register('password2')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Confirm Password" />
                {errors.password2 && (<p className="text-red-600 flex justify-start">{`${errors.password2.message}`}</p>)}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-black dark:bg-white dark:text-black text-lg font-semibold  text-white p-2 rounded-md dark:hover:text-white hover:bg-blue-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">{isSubmitting ? 'Signing Up...' : 'Sign Up'}</button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
              <p>Already have an account? <Link to="/login" className="text-black dark:text-yellow-400 hover:underline">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
