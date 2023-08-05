import { HiOutlineEnvelope } from "react-icons/hi2";
import { TitleLabel } from "../components";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { PhoneInput } from "react-international-phone";

const Contact = () => {
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
					action=""
					className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
				>
					<div className="form-group">
						<label htmlFor="fullname">
							FULL NAME <span className="text-red-600">*</span>
						</label>
						<InputText placeholder="Your Full Name" id="fullname" />
					</div>

					<div className="form-group">
						<label htmlFor="email">
							EMAIL <span className="text-red-600">*</span>
						</label>
						<InputText placeholder="Your Email Address" id="email" />
					</div>

					<div className="form-group">
						<label htmlFor="phone">PHONE (OPTIONAL)</label>
						<PhoneInput defaultCountry="gh" placeholder="Enter Phone Number" />
					</div>

					<div className="form-group">
						<label htmlFor="subject">
							SUBJECT <span className="text-red-600">*</span>
						</label>
						<InputText placeholder="Your Email Address" id="subject" />
					</div>

					<div className="col-span-1 md:col-span-2 form-group">
						<label htmlFor="message">
							MESSAGE <span className="text-red-600">*</span>
						</label>
						<InputTextarea placeholder="Write your message here..." rows={2} cols={20} />
					</div>

					<button
						type="button"
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
