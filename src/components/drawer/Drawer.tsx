import { CloseIcon } from "@/assets/icon";
import { IconButton } from "@mui/material";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

type TDrawerProps = MuiDrawerProps & {
  onClose: () => void;
  title?: string;
  width?: number; // Allow custom width
};

const StyledDrawer = styled(MuiDrawer)<{ drawerWidth: number }>(
  ({ drawerWidth }) => ({
    "& .MuiDrawer-paper": {
      backgroundColor: "var(--tw-drawer-background-color, white)",
      boxShadow: "var(--tw-drawer-box-shadow, rgba(0, 0, 0, 0.1) 0px 4px 12px)",
      width: `${drawerWidth}px`, // Dynamic width
      padding: "16px",
    },
  })
);

const Drawer = ({
  open,
  onClose,
  title,
  width = 350,
  children,
  ...props
}: TDrawerProps) => {
  return (
    <StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      drawerWidth={width}
      {...props}
    >
      <div className="flex justify-between items-center pb-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        <IconButton
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900"
        >
          {CloseIcon}
        </IconButton>
      </div>
      <div className="overflow-auto">{children}</div>
    </StyledDrawer>
  );
};

export { Drawer };
