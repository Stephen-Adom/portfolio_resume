import { HiOutlineEnvelope } from "react-icons/hi2";
import { TitleLabel } from "../components";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";

type ContactFormType = {
	fullname: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

const Contact = () => {
	const form = useForm<ContactFormType>({
		defaultValues: {
			fullname: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;

	const onSubmit = (data: ContactFormType) => {
		console.log(data);
	};

	const errorBorder = (field: keyof ContactFormType) => {
		if (errors && errors[field]) {
			return "p-invalid";
		}
	};

	const errorMessage = (field: keyof ContactFormType) => {
		if (errors && errors[field]) {
			return <span className="block text-red-600 text-sm mt-1">{errors[field]?.message}</span>;
		}
	};

	return (
		<div className="my-16 lg:my-40 services-section" id="contact">
			<TitleLabel>
				<HiOutlineEnvelope className="text-lg" /> CONTACT
			</TitleLabel>

			<h1 className="mt-10 text-4xl lg:text-5xl w-full lg:w-[80%] font-light leading-10 lg:leading-[60px]">
				Let's Work <span className="text-lightBlue">Together</span>
			</h1>
			<div className="w-full mt-6">
				<p className="text-2xl">stephen.alaska94@gmail.com</p>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
				>
					<div className="form-group">
						<label htmlFor="fullname">
							FULL NAME <span className="text-red-600">*</span>
						</label>
						<InputText
							placeholder="Your Full Name"
							id="fullname"
							className={`${errorBorder("fullname")}`}
							{...register("fullname", {
								required: "Enter your full name",
							})}
						/>
						{errorMessage("fullname")}
					</div>

					<div className="form-group">
						<label htmlFor="email">
							EMAIL <span className="text-red-600">*</span>
						</label>
						<InputText
							placeholder="Your Email Address"
							id="email"
							className={`${errorBorder("fullname")}`}
							{...register("email", {
								required: "Enter your email address",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
							})}
						/>
						{errorMessage("email")}
					</div>

					<div className="form-group">
						<label htmlFor="phone">PHONE (OPTIONAL)</label>
						<PhoneInput defaultCountry="gh" placeholder="Enter Phone Number" />
					</div>

					<div className="form-group">
						<label htmlFor="subject">
							SUBJECT <span className="text-red-600">*</span>
						</label>
						<InputText
							placeholder="Your message subject/title"
							className={`${errorBorder("fullname")}`}
							id="subject"
							{...register("subject", {
								required: "Enter your message subject",
							})}
						/>
						{errorMessage("email")}
					</div>

					<div className="col-span-1 md:col-span-2 form-group">
						<label htmlFor="message">
							MESSAGE <span className="text-red-600">*</span>
						</label>
						<InputTextarea
							placeholder="Write your message here..."
							rows={2}
							cols={20}
							className={`${errorBorder("fullname")}`}
							{...register("message", {
								required: "Enter your message",
							})}
						/>
						{errorMessage("message")}
					</div>

					<button
						type="submit"
						className="w-[90%] lg:w-[70%] py-5 text-md text-white rounded-full linear-gradient"
					>
						SEND MESSAGE
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
