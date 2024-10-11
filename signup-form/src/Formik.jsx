import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as z from 'zod';

// Zod validation schema
const validationSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address"),
    school: z.string().min(1, "School is required"),
    phone: z
      .string()
      .min(10, "Phone should contain 10 numbers")
      .max(10, "Phone should contain 10 numbers"),
    gender: z.string().min(1, "Gender is required"),
    course: z.array(z.string()).nonempty("Select at least one course"),
    location: z.string().min(1, "Location is required"),
  });

  const ValidateForm = (values) => {
    try {
      validationSchema.parse(values); 
    } catch (error) {
      const errors = {};
      if (error instanceof z.ZodError) {             
        error.errors.forEach((issue) => {
          errors[issue.path[0]] = issue.message;
        });
      }
      return errors;
    }
    return {};
  };

const initialValues = {
  name: '',
  email: '',
  school: '',
  phone: '',
  gender: '',
  course: [],
  location: '',
};

const StudentForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    alert('Form submitted successfully!');
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Student Details Form</h2>

        <Formik
          initialValues={initialValues}
          validate={ValidateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className=''>
                <label className="block font-semibold">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="border w-full p-2 rounded-lg "
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border w-full p-2 rounded-lg "
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">School</label>
                <Field
                  type="text"
                  name="school"
                  className="border w-full p-2 rounded-lg "
                />
                <ErrorMessage name="school" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  className="border w-full p-2 rounded-lg "
                />
                <ErrorMessage name="phone" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">Gender</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="gender"
                      value="Male"
                      className="form-radio"
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="gender"
                      value="Female"
                      className="form-radio"
                    />
                    <span>Female</span>
                  </label>
                </div>
                <ErrorMessage name="gender" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">Course</label>
                <div className="flex flex-wrap space-x-4">
                  {['IT', 'HRM', 'English', 'Graphic Design'].map((course) => (
                    <label key={course} className="flex items-center space-x-2">
                      <Field
                        type="checkbox"
                        name="course"
                        value={course}
                        className="form-checkbox"
                      />
                      <span>{course}</span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="course" component="div" className="text-red-500" />
              </div>

              <div>
                <label className="block font-semibold">Institute Location</label>
                <Field
                  as="select"
                  name="location"
                  className="border w-full p-2 rounded-lg"
                >
                  <option value="">Select Location</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Kandy">Kandy</option>
                </Field>
                <ErrorMessage name="location" component="div" className="text-red-500" />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StudentForm;
