import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

function Dialog({ ...props }) {
    return <DialogPrimitive.Root {...props} />;
}

function DialogContent({ children, className="", ...props }) {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <DialogPrimitive.Content className={`fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-lg
                                                transform -translate-x-1/2 -translate-y-1/2 bg-card 
                                                text-card-foreground border border-border rounded-3xl p-6 shadow-xl 
                                                flex flex-col items-center gap-8 ${className}`} {...props}>
                                                    {children}
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
}

function DialogHeader({ children }) {
    return (
        <div className="flex items-start justify-between  pr-8 relative w-full">
            <div>
                {children}
            </div>

            <DialogPrimitive.Close className="absolute -top-0.5 right-0 rounded-full p-2 opacity-70 hover:opacity-100 hover:bg-muted transition-colors duration-200 shrink-0">
                <X size={20} />
            </DialogPrimitive.Close>
        </div>
    );
}

function DialogTitle({ children }) {
    return (
        <DialogPrimitive.Title className="text-2xl font-bold">
            {children}
        </DialogPrimitive.Title>
    );
}

export { Dialog, DialogContent, DialogHeader, DialogTitle };