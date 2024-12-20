import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center text-red-600 dark:text-red-400">
      <AlertCircle className="w-12 h-12 mx-auto mb-4" />
      <p>{message}</p>
    </div>
  </div>
);