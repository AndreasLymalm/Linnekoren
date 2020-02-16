export function hasArrayItems(potentialArray){
    
    let potentialArrayExists = potentialArray
    if (!potentialArrayExists) return false

    let isArray = Array.isArray(potentialArray)
    if (!isArray) return false

    let hasItems = potentialArray.length > 0
    if (!hasItems) return false

    return true
}

export function kebabName(name) {
    let simplifiedName = name.toLowerCase()
    simplifiedName = simplifiedName.replace('å', 'a')
    simplifiedName = simplifiedName.replace('ä', 'a')
    simplifiedName = simplifiedName.replace('ö', 'o')
    simplifiedName = simplifiedName.replace('é', 'e')
    return simplifiedName.replace(' ', '-')
}