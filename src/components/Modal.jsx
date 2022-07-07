import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../styles/modal.scss";

export const Modal = ({ selectedId, children }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			selectedId();
		}
	};

	const backgroundVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	const modalVariants = {
		initial: {
			opacity: 0,
			y: 200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				type: "spring",
				stiffness: 100,
			},
		},

		exit: {
			y: -200,
			opacity: 0,
		},
	};

	return (
		<AnimatePresence>
			{selectedId && (
				<motion.div
					className="background"
					variants={backgroundVariants}
					animate="animate"
					initial="initial"
					onClick={closeModal}
				>
					<motion.div
						className="modal"
						variants={modalVariants}
						animate="animate"
						initial="initial"
						exit={{
							opacity: 0,
							// y: "-100vh",
						}}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
