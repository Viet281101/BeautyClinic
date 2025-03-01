import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { RegisterRequest, LoginRequest } from "./types/authTypes";
import ReCAPTCHA from "react-google-recaptcha";

const FormContainer = styled.div`
	${tw`max-w-[400px] my-0 mx-auto p-[20px] border-[2px] border-solid border-[#D9DDFE] rounded-[10px]`}
`;

const Form = styled.form`
	${tw`flex flex-col`}
`;

const InputGroup = styled.div`
	${tw`mb-[10px]`}
`;

const Label = styled.label`
	${tw`block mb-[5px] text-[14px] text-[#091156] font-semibold`}
	span { ${tw`text-[red]`} }
`;

const Input = styled.input`
	${tw`w-full p-[8px] rounded-[5px] border-[2px] border-solid border-[#D9DDFE] text-[14px]`}
`;

const ErrorMessage = styled.p`
	${tw`text-[red] text-[12px] mb-[10px]`}
`;

const SubmitButton = styled.button`
	${tw`w-full p-[10px] bg-[#FF64AE] text-[#FFF] font-semibold border-none rounded-[5px] cursor-pointer text-[16px]`}
	&:disabled {
		${tw`bg-[#CCC] cursor-not-allowed`}
	}
`;

const RegisterForm: React.FC = () => {
	const { register, login } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		if (!captchaToken) {
			setError("Please verify you are not a robot.");
			setLoading(false);
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match!");
			setLoading(false);
			return;
		}

		if (!email.includes("@")) {
			setError("Invalid email format");
			setLoading(false);
			return;
		}

		try {
			const registerRequest: RegisterRequest = {
				name,
				email,
				password,
				phoneNumber: phoneNumber || undefined,
			};
			await register(registerRequest);

			const loginRequest: LoginRequest = { email, password };
			const response = await login(loginRequest);

			localStorage.setItem("token", response.token);

			const username = response.user.name.replace(/\s+/g, "").toLowerCase();
			navigate(`/${username}`);
		} catch (err: any) {
			setError(err.response?.data?.message || "Registration failed!");
		} finally {
			setLoading(false);
		}
	};

	const handleCaptchaChange = (token: string | null) => {
		setCaptchaToken(token);
		setError(null);
	};

	return (
		<FormContainer>
			<Form onSubmit={handleRegister}>
				{/* Name Field */}
				<InputGroup>
					<Label htmlFor="name">Name <span>*</span></Label>
					<Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
				</InputGroup>

				{/* Email Field */}
				<InputGroup>
					<Label htmlFor="email">Email <span>*</span></Label>
					<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</InputGroup>

				{/* Phone Number Field */}
				<InputGroup>
					<Label htmlFor="phone">Phone Number (optional)</Label>
					<Input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
				</InputGroup>

				{/* Password Field */}
				<InputGroup>
					<Label htmlFor="password">Password <span>*</span></Label>
					<Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</InputGroup>

				{/* Confirm Password Field */}
				<InputGroup>
					<Label htmlFor="confirmPassword">Confirm Password <span>*</span></Label>
					<Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
				</InputGroup>

				{/* CAPTCHA */}
				<InputGroup>
					<Label>Verify CAPTCHA</Label>
					<ReCAPTCHA
						sitekey="6LcYXL4qAAAAAKpkjy38kPe771gJW1cnZ5BhndUT"
						onChange={handleCaptchaChange}
					/>
				</InputGroup>

				{/* Error Message */}
				{error && <ErrorMessage>{error}</ErrorMessage>}

				{/* Submit Button */}
				<SubmitButton type="submit" disabled={loading || !captchaToken}>{loading ? "Registering..." : "Register"}</SubmitButton>
				{/* <SubmitButton type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</SubmitButton> */}
			</Form>
		</FormContainer>
	);
};

export default RegisterForm;
