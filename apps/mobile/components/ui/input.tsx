import * as React from "react";
import {
	TextInput,
	View,
	TouchableOpacity,
	StyleSheet,
	type TextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

type ExtendedTextInputProps = TextInputProps & {
	type?: "text" | "password"; // Custom `type` prop to specify input type
};

const Input = React.forwardRef<
	React.ElementRef<typeof TextInput>,
	ExtendedTextInputProps
>(({ className, placeholderClassName, type, ...props }, ref) => {
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<View style={styles.container}>
			<TextInput
				ref={ref}
				secureTextEntry={type === "password" && !isPasswordVisible}
				className={cn(
					"web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
					props.editable === false && "opacity-50 web:cursor-not-allowed",
					className,
				)}
				placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
				{...props}
			/>
			{type === "password" && (
				<TouchableOpacity
					onPress={togglePasswordVisibility}
					style={styles.iconContainer}
				>
					<FontAwesome
						name={isPasswordVisible ? "eye-slash" : "eye"}
						size={20}
						color="#000"
					/>
				</TouchableOpacity>
			)}
		</View>
	);
});

Input.displayName = "Input";

export { Input };

const styles = StyleSheet.create({
	container: {
		position: "relative",
		width: "100%",
	},
	iconContainer: {
		position: "absolute",
		right: 10,
		top: 20,
		transform: [{ translateY: -10 }], // Adjust for vertical centering
		zIndex: 1,
	},
});
