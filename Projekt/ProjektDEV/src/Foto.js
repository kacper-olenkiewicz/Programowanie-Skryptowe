function addFoto(fotoList, newFoto) {
    if (!Array.isArray(fotoList)) {
        throw new Error("fotoList must be an array");
    }
    if (typeof newFoto !== "string" || newFoto.trim() === "") {
        throw new Error("newFoto must be a non-empty string");
    }

    fotoList.push(newFoto);
    return fotoList;
}

function removeFoto(fotoList, fotoToRemove) {
    if (!Array.isArray(fotoList)) {
        throw new Error("fotoList must be an array");
    }
    if (typeof fotoToRemove !== "string" || fotoToRemove.trim() === "") {
        throw new Error("fotoToRemove must be a non-empty string");
    }

    const index = fotoList.indexOf(fotoToRemove);
    if (index > -1) {
        fotoList.splice(index, 1);
    }
    return fotoList;
}