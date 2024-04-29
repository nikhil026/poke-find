import { backendStaticUrl } from "../variables";

const usePokemonImage = ({ id = '' }) => {

    const idStr = id.toString();
    const pad = "000";
    const paddedId = pad.substring(0, pad.length - idStr.length) + idStr;
    const imageUrl = `${backendStaticUrl}/images/${paddedId}.png`;

    return { imageUrl };
}

export default usePokemonImage;