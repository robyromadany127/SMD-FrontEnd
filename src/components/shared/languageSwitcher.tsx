import { useTranslation } from "react-i18next";
import langSwitcherData from "@/lib/languangeSwitcher.json";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <div className="relative inline-block text-left px-4full">
      <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
        <SelectTrigger className="bg-white border-none rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none px-4 w-lg">
          {langSwitcherData.find((lang) => lang.value === i18n.language)
            ?.title || "Select Language"}
        </SelectTrigger>
        <SelectContent>
          {langSwitcherData.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
