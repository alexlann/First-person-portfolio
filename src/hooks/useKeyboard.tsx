import { useCallback, useEffect, useState } from "react"

// Return correct action with each key
function actionByKey (key: string) {
	if (key === 'KeyW' || key === 'ArrowUp') {
		return 'moveForward';
	} else if (key === 'KeyS' || key === 'ArrowDown' ) {
		return 'moveBackward';
	} else if (key === 'KeyA' || key === 'ArrowLeft' ) {
		return 'moveLeft';
	} else if (key === 'KeyD' || key === 'ArrowRight' ) {
		return 'moveRight';
	}
}

export const useKeyboard = () => {
	// Set initial state, player is able to run in different directions at the same time
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
	})

	// Handle keydown and keyup events
	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e: KeyboardEvent) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	// Add event listeners
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

	return actions
}
