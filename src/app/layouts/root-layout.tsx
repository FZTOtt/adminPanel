import { Outlet } from 'react-router-dom';
import { SideBar } from '../../widgets/sidebar';

export function RootLayout() {
  return (
    <div className="app-container">
      <SideBar />
      <main className="content">
        <Outlet /> {/* Контент страниц будет здесь */}
      </main>
    </div>
  );
}