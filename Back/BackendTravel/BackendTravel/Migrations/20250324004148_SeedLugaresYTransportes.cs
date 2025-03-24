using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackendTravel.Migrations
{
    /// <inheritdoc />
    public partial class SeedLugaresYTransportes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "EstatusesViaje",
                columns: new[] { "Id", "Nombre" },
                values: new object[,]
                {
                    { 1, "Programado" },
                    { 2, "En curso" },
                    { 3, "Finalizado" },
                    { 4, "Cancelado" }
                });

            migrationBuilder.InsertData(
                table: "Lugares",
                columns: new[] { "Id", "Activo", "Nombre", "Tipo" },
                values: new object[,]
                {
                    { 1, true, "CDMX", null },
                    { 2, true, "Guadalajara", null },
                    { 3, true, "Monterrey", null }
                });

            migrationBuilder.InsertData(
                table: "Transportes",
                columns: new[] { "Id", "Activo", "Nombre", "Tipo" },
                values: new object[,]
                {
                    { 1, true, "Camión de pasajeros", null },
                    { 2, true, "Camión de carga", null },
                    { 3, true, "Camioneta tipo van", null },
                    { 4, true, "Tráiler", null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EstatusesViaje",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "EstatusesViaje",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "EstatusesViaje",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "EstatusesViaje",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Lugares",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Lugares",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Lugares",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Transportes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Transportes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Transportes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Transportes",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
