export function checkValue(
	value: string,
	badReturn = 'no data',
	countUnknown = false
) {
	if (value === 'n/a' || value === 'none') {
		return badReturn
	} else if (countUnknown && value === 'unknown') {
		return badReturn
	}

	return value
}
