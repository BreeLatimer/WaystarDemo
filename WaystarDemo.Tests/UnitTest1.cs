using Xunit;
using WaystarDemo.Controllers;

namespace WaystarDemo.Tests;

public class UnitTest1
{
    [Fact]
    public void WeatherForecast_Returns_Five_Results()
    {
	// Arrange
	var controller = new WeatherForecastController(null);

	// Act
	var result = controller.Get();

	// Assert
	Assert.Equal(5, result.Count());
    }
}