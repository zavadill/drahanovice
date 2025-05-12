import Image from "next/image";
import Header from "@/components/Hlavni/Header";
import Vitejte from "@/components/Hlavni/Vitejte";
import Speciality from "@/components/Hlavni/Speciality";
import Galerie from "@/components/Hlavni/Galerie";
import Sluzby from "@/components/Hlavni/Sluzby";
import Kontaktuje from "@/components/Hlavni/Kontaktuje";

export default function Home() {
  return (
    <div className="text-black">
      <Header />
      <Vitejte />
      <Sluzby />
      <Speciality />
      <Galerie />
      <Kontaktuje />
    </div>
  );
}
