import EditNoteIcon from '@mui/icons-material/EditNote';
import { IconButton, Tooltip } from '@mui/material';

type TProps = {
  articleId: string | number;
};

// TODO: Define how to load the article single
const EditArticleButton = ({ articleId }: TProps) => {
  return (
    <Tooltip title={'Edit article'} placement="bottom">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => null}
        edge="start"
        size="small"
      >
        <EditNoteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default EditArticleButton;
