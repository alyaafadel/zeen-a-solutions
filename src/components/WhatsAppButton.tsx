
import React, { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CountryOption {
  country: string;
  flag: string;
  phoneNumber: string;
}

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message: string;
  variant?: 'header' | 'cta' | 'service' | 'inline' | 'form' | 'footer' | 'floating';
  text?: string;
  className?: string;
  countries?: CountryOption[];
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  variant = 'inline',
  text,
  className,
  countries
}) => {
  const handleWhatsAppClick = (phone?: string) => {
    const encodedMessage = encodeURIComponent(message);
    const targetPhone = phone || phoneNumber || '';
    const cleanPhone = targetPhone.replace(/[^\d+]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // If countries are provided, show dropdown
  if (countries && countries.length > 0) {
    const buttonContent = (
      <>
        <MessageSquare className="h-4 w-4 ml-2" />
        {text || 'واتس آب'}
        <ChevronDown className="h-3 w-3 mr-2" />
      </>
    );

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn(
              "bg-green-500 hover:bg-green-600 text-white",
              variant === 'header' && "px-4 py-2 rounded-full",
              variant === 'cta' && "border-green-500 text-green-600 hover:bg-green-50 px-8",
              variant === 'footer' && "w-full",
              className
            )}
            size={variant === 'cta' ? 'lg' : 'sm'}
          >
            {buttonContent}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white shadow-xl border-2 border-green-100 z-50" align="center">
          <div className="p-2 bg-gradient-to-r from-green-50 to-green-50 border-b border-green-100">
            <p className="text-sm font-semibold text-green-700 text-center">اختر دولتك</p>
          </div>
          {countries.map((country, index) => (
            <DropdownMenuItem 
              key={index}
              onClick={() => handleWhatsAppClick(country.phoneNumber)}
              className="cursor-pointer py-3 px-4 hover:bg-green-50 transition-colors duration-200"
            >
              <span className="text-2xl ml-3">{country.flag}</span>
              <span className="font-medium text-sm">{country.country}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const getButtonVariant = () => {
    switch (variant) {
      case 'header':
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            className={cn(
              "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full",
              className
            )}
            size="sm"
          >
            <MessageSquare className="h-4 w-4 ml-2" />
            واتس آب
          </Button>
        );
      
      case 'cta':
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            variant="outline"
            size="lg"
            className={cn(
              "border-green-500 text-green-600 hover:bg-green-50 px-8",
              className
            )}
          >
            <MessageSquare className="ml-2 h-5 w-5" />
            {text}
          </Button>
        );
      
      case 'service':
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            className={cn(
              "w-full bg-green-500 hover:bg-green-600 text-white",
              className
            )}
            size="sm"
          >
            <MessageSquare className="ml-2 h-4 w-4" />
            {text}
          </Button>
        );
      
      case 'inline':
        return (
          <button
            onClick={() => handleWhatsAppClick()}
            className={cn(
              "text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center",
              className
            )}
          >
            <MessageSquare className="h-4 w-4 ml-1" />
            {text}
          </button>
        );
      
      case 'form':
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            variant="outline"
            className={cn(
              "w-full border-green-500 text-green-600 hover:bg-green-50",
              className
            )}
          >
            <MessageSquare className="ml-2 h-4 w-4" />
            {text}
          </Button>
        );
      
      case 'footer':
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            className={cn(
              "bg-green-500 hover:bg-green-600 text-white",
              className
            )}
            size="sm"
          >
            <MessageSquare className="ml-2 h-4 w-4" />
            {text}
          </Button>
        );
      
      case 'floating':
        return (
          <button
            onClick={() => handleWhatsAppClick()}
            className={cn(
              "bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 space-x-reverse group",
              className
            )}
          >
            <MessageSquare className="h-6 w-6" />
            <span className="hidden group-hover:block whitespace-nowrap text-sm font-medium">
              {text}
            </span>
          </button>
        );
      
      default:
        return (
          <Button
            onClick={() => handleWhatsAppClick()}
            className={cn("bg-green-500 hover:bg-green-600", className)}
          >
            <MessageSquare className="ml-2 h-4 w-4" />
            {text || "واتس آب"}
          </Button>
        );
    }
  };

  return getButtonVariant();
};

export default WhatsAppButton;
