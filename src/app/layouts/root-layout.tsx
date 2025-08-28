import { Outlet } from 'react-router-dom';
import { SideBar } from '../../widgets/sidebar';
import { NavBar } from '../../widgets/navbar';

export function RootLayout() {
  return (
    <div className="app-container">
      <NavBar />
      <SideBar />
      <main className="content">
        <Outlet /> {/* Контент страниц будет здесь */}
      </main>
    </div>
  );
}