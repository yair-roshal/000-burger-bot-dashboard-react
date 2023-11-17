import React, { useState } from "react"
import { ImagePreview } from "components/styledComponents"
import {
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Typography,
	Button,
	TextField,
	LinearProgress,
	Box,
	Input,
} from "@mui/material"
import axios from "axios"

import { useAuth0 } from "@auth0/auth0-react"
import { FlexRowContainer, FlexColumnContainer } from "components/AllHelpComponents"

export function Settings() {
	const { user } = useAuth0()
	const [link, setLink] = useState("")
	const [textToOrder, setTextToOrder] = useState("")
	const [productImg, setProductImg] = useState("")
	const [showCreditCardButton, setShowCreditCardButton] = useState(false)
	const [showApplePayButton, setShowApplePayButton] = useState(false)
	const [showGooglePayButton, setShowGooglePayButton] = useState(false)
	const [showOrderButton, setShowOrderButton] = useState(false)

	const handleProductImageUpload = (e) => {
		const file = e.target.files[0]
		TransformFileData(file)
	}

	const TransformFileData = (file) => {
		const reader = new FileReader()

		if (file) {
			reader.readAsDataURL(file)
			reader.onloadend = () => {
				setProductImg(reader.result)
			}
		} else {
			setProductImg("")
		}
	}
	const handleLinkChange = (e) => {
		setLink(e.target.value)
	}
	const handleTextToOrder = (e) => {
		setTextToOrder(e.target.value)
	}
	const saveChanges = async () => {
		const dataToUpdate = {
			link: link,
			productImg: productImg,
			showCreditCardButton: showCreditCardButton,
			showApplePayButton: showApplePayButton,
			showGooglePayButton: showGooglePayButton,
			showOrderButton: showOrderButton,
			textToOrder: textToOrder,
		}

		const restaurant_id = 2
		console.log("dataToUpdate", dataToUpdate)
		try {
			const response = await axios.put(
				`https://burgerim.ru/config/${restaurant_id}`,
				dataToUpdate
			)
			console.log('Запрос "saveChanges" успешно выполнен')
		} catch (error) {
			console.error('Ошибка при выполнении запроса "saveChanges":', error)
		}
	}

	return (
		<FlexColumnContainer>
			<FlexRowContainer sx={{ m: "15px " }}>
				<Typography sx={{ m: "5px " }} variant="h6">
					Link
				</Typography>
				<TextField
					sx={{ m: "5px  " }}
					value={link}
					onChange={handleLinkChange}
					label="Link"
					variant="outlined"
					fullWidth
				/>
			</FlexRowContainer>
			<FlexRowContainer sx={{ m: "15px " }}>
				<Typography sx={{ m: "5px " }} variant="h6">
					Text to Order
				</Typography>
				<TextField
					sx={{ m: "5px  " }}
					value={textToOrder}
					onChange={handleTextToOrder}
					label="textToOrder"
					variant="outlined"
					fullWidth
				/>
			</FlexRowContainer>

			<FlexRowContainer>
				<Typography sx={{ m: "5px " }} variant="h6">
					Photo in Order
				</Typography>
				<Input
					id="imgUpload"
					type="file"
					inputProps={{
						accept: "image/*",
						style: { maxWidth: "100px" },
					}}
					onChange={handleProductImageUpload}
					required
				/>{" "}
				<ImagePreview>
					{productImg ? (
						<>
							<img src={productImg} alt="error!" />
						</>
					) : (
						<p> Image Preview </p>
					)}
				</ImagePreview>
			</FlexRowContainer>

			<FlexRowContainer>
				<Typography sx={{ m: "5px " }} variant="h6">
					Credit Card Button
				</Typography>
				<input
					type="checkbox"
					checked={showCreditCardButton}
					onChange={(e) => setShowCreditCardButton(e.target.checked)}
				/>
			</FlexRowContainer>

			<FlexRowContainer>
				<Typography sx={{ m: "5px " }} variant="h6">
					Apple Pay Button
				</Typography>
				<input
					type="checkbox"
					checked={showApplePayButton}
					onChange={(e) => setShowApplePayButton(e.target.checked)}
				/>
			</FlexRowContainer>

			<FlexRowContainer>
				<Typography sx={{ m: "5px " }} variant="h6">
					Google Pay Button
				</Typography>
				<input
					type="checkbox"
					checked={showGooglePayButton}
					onChange={(e) => setShowGooglePayButton(e.target.checked)}
				/>
			</FlexRowContainer>

			<FlexRowContainer>
				<Typography sx={{ m: "5px " }} variant="h6">
					Order Button
				</Typography>
				<input
					type="checkbox"
					checked={showOrderButton}
					onChange={(e) => setShowOrderButton(e.target.checked)}
				/>
			</FlexRowContainer>

			<Button
				sx={{ m: "5px 0px" }}
				variant="contained"
				color="primary"
				onClick={saveChanges}
			>
				save
			</Button>
		</FlexColumnContainer>
	)
}
