"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import facebookIcon from "@/midias/facebookIcon.svg";
import googleIcon from "@/midias/googleIcon.svg";
import discordIcon from "@/midias/discordIcon.svg";
import envelopeIcon from "@/midias/envelopeIcon.svg"; 
import lockIcon from "@/midias/lockIcon.svg"; 
import eyeOffIcon from "@/midias/eyeOffIcon.svg"; 
import Image from "next/image";
import { useTranslations } from "next-intl";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const t = useTranslations("LoginPage");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="md:min-h-screen bg-[#111111] text-foreground flex flex-col items-center">
      <main className="flex items-center justify-center flex-1 w-full">
        <div className="bg-[#1a1a1a] rounded-[24px] p-8 shadow-lg w-[504px] max-w-[90%] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#43434A]/30">
          <div className="flex justify-center items-center mb-4 pb-2">
            <button
              onClick={() => setActiveTab("login")}
              className={`text-lg w-[220px] h-[54px] flex items-center justify-center ${
                activeTab === "login" ? "text-white font-bold" : "text-gray-400"
              }`}
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: activeTab === "login" ? 700 : 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              {t("login")}
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`text-lg w-[220px] h-[54px] flex items-center justify-center ${
                activeTab === "register" ? "text-white font-bold" : "text-gray-400"
              }`}
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: activeTab === "register" ? 700 : 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              {t("register")}
            </button>
          </div>
          <div className="flex mb-4">
            <div
              className={`w-[220px] h-[2px] transition-all duration-300 ${
                activeTab === "login" ? "bg-purple-500" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-[220px] h-[2px] transition-all duration-300 ${
                activeTab === "register" ? "bg-purple-500" : "bg-gray-600"
              }`}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#2c2c2c] text-white rounded border border-gray-600 focus:outline-none focus:border-purple-500"
                required
              />
              <Image src={envelopeIcon} alt="Envelope Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("passwordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-[#2c2c2c] text-white rounded border border-gray-600 focus:outline-none focus:border-purple-500"
                required
              />
              <Image src={lockIcon} alt="Lock Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Image src={eyeOffIcon} alt="Toggle Password Visibility" className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-500" />
                {t("rememberme")}
              </label>
              <a href="#" className="text-purple-400 hover:text-purple-500">{t("forgotPassword")}</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white rounded font-semibold transition-colors duration-300"
            >
              {activeTab === "login" ? t("login") : t("register")}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="px-2 text-gray-400">{t("or")}</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/">
              <Image src={facebookIcon} alt={t("loginWith") + " Facebook"} className="w-12 h-12" />
            </Link>
            <Link href="/">
              <Image src={googleIcon} alt={t("loginWith") + " Google"} className="w-12 h-12" />
            </Link>
            <Link href="/">
              <Image src={discordIcon} alt={t("loginWith") + " Discord"} className="w-12 h-12" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center p-4 text-gray-600">
        <p>© 2024 El Mago</p>
      </footer>
    </div>
  );
};

export default LoginPage;
