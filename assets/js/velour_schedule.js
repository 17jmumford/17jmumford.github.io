// script.js

document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    // Function to fetch and display events
    fetch('https://velour-scraper.s3.us-west-2.amazonaws.com/events.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(monthData => {
                for (const date in monthData) {
                    const events = monthData[date];
                    events.forEach(event => {
                        for (const time in event) {
                            const eventData = event[time];
                            console.log(time);
                            // Create event item
                            const eventItem = document.createElement('div');
                            eventItem.classList.add('event-item');

                            // Create a container for the left side content
                            const leftContent = document.createElement('div');
                            leftContent.classList.add('event-left-content');

                            // Add event date
                            console.log(date);
                            console.log(eventData);
                            const eventDate = document.createElement('div');
                            eventDate.classList.add('event-date');
                            eventDate.textContent = formatDateString(date, time);
                            leftContent.appendChild(eventDate);

                            // Add event title (special notes)
                            const eventTitle = document.createElement('div');
                            eventTitle.classList.add('event-title');
                            eventTitle.textContent = eventData.special_notes;
                            leftContent.appendChild(eventTitle);

                            // Add artist links
                            const artistsDiv = document.createElement('div');
                            artistsDiv.classList.add('artists');
                            eventData.artists.forEach((artist, index) => {
                                const artistLink = document.createElement('a');
                                artistLink.href = eventData.spotify_data[index]?.artist.external_urls.spotify || '#';
                                artistLink.textContent = artist;
                                artistsDiv.appendChild(artistLink);
                            });
                            leftContent.appendChild(artistsDiv);

                            // Append left content to event item
                            eventItem.appendChild(leftContent);

                            // Google Calendar button
                            const calendarButton = document.createElement('img');
                            calendarButton.src = '/images/google_cal.png';
                            calendarButton.alt = 'Add to Google Calendar';
                            calendarButton.classList.add('google-calendar-icon');
                            calendarButton.style.cursor = 'pointer';
                            calendarButton.style.width = '48px';
                            calendarButton.style.height = '48px';
                            calendarButton.addEventListener('click', () => {
                                addToGoogleCalendar(eventDate.textContent, eventTitle.textContent, eventData.artists);
                            });

                            // Append calendar button to event item
                            eventItem.appendChild(calendarButton);

                            // Append event item to event list
                            eventList.appendChild(eventItem);
                        }
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });

    // Helper function to format date strings
    function formatDateString(dateString, day_of_month) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        return `${month}/${day_of_month}/${year}`;
    }

    // Function to add event to Google Calendar
    function addToGoogleCalendar(date, title, artists) {
        const [month, day, year] = date.split('/');
        const startDate = new Date(Date.UTC(year, month - 1, day, 2, 0, 0)); // Set to 8:00 PM MDT (2:00 AM UTC)
        const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); // Assuming 3-hour event duration
        const formattedStartDate = startDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const cal_title = title + " @ Velour: " + artists.join(", ");
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${formattedStartDate}%2F${formattedEndDate}&location=135%20N%20University%20Ave%2C%20Provo%2C%20UT%2084601&text=${encodeURIComponent(cal_title)}`;
        window.open(calendarUrl, '_blank');
    }
});