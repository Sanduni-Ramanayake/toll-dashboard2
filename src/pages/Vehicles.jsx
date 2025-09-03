import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import VehicleList from "../components/VehicleList";
import VehicleSearchBar from "../components/VehicleSearchBar";
import VehicleToolbar from "../components/VehicleToolbar";
import { GetCurrentVehicles } from "../functions/firebase";



export default function Vehicles({ onLogout }) {
  const [AvailableVehicleList, setAvailableVehicleList] = useState([]);

  useEffect(() => {
    GetCurrentVehicles().then((snapshot) => {
      const vehicles = snapshot.docs.map((doc) => doc.data());
      setAvailableVehicleList(vehicles);
    });

  }, []);


  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Add Vehicle (demo)
  // const handleAddVehicle = () => {
  //   const plate = prompt("Enter license plate:");
  //   if (!plate) return;
  //   const newList = [
  //     ...vehicles,
  //     {
  //       plate,
  //       type: "Sedan",
  //       owner: "New Owner",
  //       status: "Active",
  //       amount: 0,
  //       trips: 0,
  //     },
  //   ];
  //   setVehicles(newList);
  //   setFiltered(newList);
  // };

  // Edit Vehicle (demo)
  // const handleEdit = (plate) => {
  //   const newOwner = prompt("Edit owner name:");
  //   if (!newOwner) return;
  //   const updated = vehicles.map((v) =>
  //     v.plate === plate ? { ...v, owner: newOwner } : v
  //   );
  //   setVehicles(updated);
  //   setFiltered(updated);
  // };

  // View Vehicle (demo)
  // const handleView = (plate) => {
  //   alert(`Viewing details for ${plate}`);
  // };

  // Filter button handler
  // const handleFilter = () => {
  //   setFiltered(
  //     vehicles.filter(
  //       (v) =>
  //         v.plate.toLowerCase().includes(search.toLowerCase()) ||
  //         v.owner.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // };

  // Clear button handler
  // const handleClear = () => {
  //   setSearch("");
  //   setFiltered(VehicleList);
  // };

  return (
    <Layout onLogout={onLogout}>
      <VehicleToolbar  />
      <VehicleSearchBar
        value={search}
        onChange={setSearch}
        // onFilter={handleFilter}
        // onClear={handleClear}
      />
      <VehicleList
        vehicles={AvailableVehicleList}
        // onEdit={handleEdit}
        // onView={handleView}
      />
    </Layout>
  );
}
