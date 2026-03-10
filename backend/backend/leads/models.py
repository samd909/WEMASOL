from django.db import models


class Lead(models.Model):

    SALUTATION_CHOICES = [
        ("Herr", "Herr"),
        ("Frau", "Frau"),
    ]

    # contact
    salutation = models.CharField(max_length=10, choices=SALUTATION_CHOICES)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    company = models.CharField(max_length=200, blank=True)

    phone = models.CharField(max_length=50)
    email = models.EmailField()

    # address
    street = models.CharField(max_length=200)
    houseNumber = models.CharField(max_length=20)
    zip = models.CharField(max_length=20)
    city = models.CharField(max_length=100)

    # energy
    houseConsumption = models.IntegerField()
    heatingConsumption = models.IntegerField(null=True, blank=True)

    heatingInfo = models.TextField(blank=True)
    objectDetails = models.TextField(blank=True)

    # preferences
    priority = models.CharField(max_length=200)

    extraOptions = models.JSONField(default=list, blank=True)

    # files
    required_file = models.FileField(upload_to="leads/")
    optional_file = models.FileField(upload_to="leads/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"