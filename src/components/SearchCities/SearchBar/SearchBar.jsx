import styles from "./SearchBar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {ListCities} from "../ListCities/ListCities";
import {useForm} from "../../../hooks";
import {startLoadingSuggestedCities} from "../../../store/index.js";

export const SearchBar = () => {

	const [isInputFocused, setIsInputFocused] = useState(false)
	const {address, onInputChange, onResetForm} = useForm({address: ""})
	const {isLoading} = useSelector(state => state.weather)
	const dispatch = useDispatch()

	useEffect(() => {
		if(address.length < 3) {
			return
		}

		dispatch(startLoadingSuggestedCities(address))
	}, [address]);

	return (
		<>
            <input
				onChange={onInputChange}
				name="address"
				value={address}
				onFocus={() => setIsInputFocused(true)}
				onBlur={() => setTimeout(() => setIsInputFocused(false), 100)}
				className={`${styles.search} ${(isInputFocused && address.length >= 3) ? styles.active : ""}`}
				type="text" placeholder="Search your city" autoComplete="off"
			/>

			{
				(isInputFocused && address.length >= 3) ? <ListCities onResetForm={onResetForm} /> : null
			}
        </>
	)
}