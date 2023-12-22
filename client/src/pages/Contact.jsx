import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  //template_cc5mewa
  //service_0zmz8sl
  //AFP7O-YDFro0md6kI
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Hanady Husino',
          from_email: form.email,
          to_email: 'info@hanadyhusino.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-emerald-900">
        {' '}
        <p className="text-sm uppercase font-normal text-center text-emerald-500">
          Get in touch
        </p>
        Contact us
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name..."
            className="border p-3 rounded-lg"
            required
          />
        </label>
        <label className="flex flex-col">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            className="border p-3 rounded-lg"
            required
          />
        </label>
        <label className="flex flex-col">
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="border p-3 rounded-lg"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-900 uppercase p-3 rounded-lg text-emerald-100 hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
