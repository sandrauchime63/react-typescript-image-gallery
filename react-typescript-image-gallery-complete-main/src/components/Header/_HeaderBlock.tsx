import { IImageGallery } from "../../types/global.types";
import CheckboxIcon from "../Icons/CheckboxIcon";
import EmptyCheckboxIcon from "../Icons/EmptyCheckboxIcon";

interface IHeaderProps {
  onDelete: (selectedItems: IImageGallery[]) => void;
  galleryData: IImageGallery[];
}

const HeaderBlock = ({ onDelete, galleryData }: IHeaderProps) => {
  const selectedItems = galleryData.filter((item) => item.isSelected);

  return (
    <div className="flex items-center justify-between gap-4 p-5">
      {selectedItems.length > 0 ? (
        <>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
            {selectedItems.length > 0 ? (
              <CheckboxIcon className="text-red-600" />
            ) : (
              <EmptyCheckboxIcon />
            )}
            <span>
              {selectedItems.length > 1
                ? `${selectedItems.length} Files Selected`
                : `${selectedItems.length} File Selected`}
            </span>
          </h2>
          <button
            className="font-semibold text-red-400 text-base md:text-lg hover:underline"
            onClick={
              selectedItems.length > 0
                ? () => onDelete(selectedItems)
                : () => {}
            }
          >
            {/* if one file then show Delete File otherwise Delete Files */}
            {selectedItems.length > 1 ? `Delete Files` : "Delete File"}
          </button>
        </>
      ) : (
        <p className="text-2xl font-semibold text-gray-800">Image Gallery</p>
      )}
    </div>
  );
};

export default HeaderBlock;
