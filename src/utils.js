import React, { useEffect, useRef } from "react";

export const truncate = (str, n) => {
	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const emailRegex = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const passwordRegex = new RegExp(
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/
);

const testEmail = (email) => {
	return emailRegex.test(email);
};

const testUsername = (username) => {
	return username.length >= 3 && username.length < 12 ? true : false;
};

const testPassword = (password) => {
	return passwordRegex.test(password);
};

export const validateEmail = (e) => {
	const res = testEmail(e.target.value);
	if (res === true) {
		return {
			valid: e.target.value,
		};
	} else {
		return {
			error: true,
			message: "Please enter a valid email address",
		};
	}
};

export const validateUsername = (e) => {
	const res = testUsername(e.target.value);
	if (res === true) {
		return { valid: e.target.value };
	} else {
		return {
			error: true,
			message: "Username must be between 3 and 12 characters",
		};
	}
};

export const validatePassword = (e) => {
	const res = testPassword(e.target.value);
	if (res === true) {
		return {
			valid: e.target.value,
		};
	} else {
		return {
			error: true,
			message: `Must contain min 8 characters, one uppercase, one lowercase, one number and one of (@, $, !, %, *, ?, &)`,
		};
	}
};

export const useClickOutside = (handler) => {
	let clickRef = useRef();

	useEffect(() => {
		const clickHandler = (e) => {
			if (!clickRef.current?.contains(e.target)) {
				handler();
			}
		};
		document.addEventListener("mousedown", clickHandler);

		return () => {
			document.removeEventListener("mousedown", clickHandler);
		};
	}, [handler]);
	return clickRef;
};
