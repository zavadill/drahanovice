import Image from "next/image";
import Header from "@/components/Hlavni/Header";
import Vitejte from "@/components/Hlavni/Vitejte";
import Speciality from "@/components/Hlavni/Speciality";
import Galerie from "@/components/Hlavni/Galerie";
import Sluzby from "@/components/Hlavni/Sluzby";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Vitejte />
      <Sluzby />
      <Speciality />
      <Galerie />
    </div>
  );
}
