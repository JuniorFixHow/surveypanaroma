'use client'
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

export function SnackProvider({ children }: { children: ReactNode }) {
    return (
        <SnackbarProvider maxSnack={3} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            {children}
        </SnackbarProvider>
    );
}